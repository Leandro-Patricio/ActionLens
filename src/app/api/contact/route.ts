import { NextResponse } from "next/server";

interface responseProps
{
    name: string;
    email: string;
    message: string;
}

export async function POST(req: Request, res: any)
{
    const response: responseProps = await req.json();

    const PASSWORD = process.env.PASSWORD;
    const EMAIL = process.env.EMAIL;
    const CLIENTID = process.env.OAUTH_CLIENT_ID;
    const CLIENTPASSWORD = process.env.OAUTH_CLIENT_SECRET;
    const REFRESHTOKEN = process.env.OAUTH_CLIENT_REFRESH_TOKEN;

    console.log('CLIENTPASSWORD', CLIENTPASSWORD)

    let nodemailer = require("nodemailer");
    const { google } = require("googleapis");
    const OAuth2 = google.auth.OAuth2;

    const createTransporter = async () =>
    {
        const oauth2Client = new OAuth2(
            CLIENTID,
            CLIENTPASSWORD,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
            refresh_token: REFRESHTOKEN,
        });

        console.log('oauth2Client', oauth2Client)
        try
        {
            const accessToken: any = await new Promise((resolve, reject) =>
            {
                oauth2Client.getAccessToken((err: Error | null, token: any) =>
                {
                    if (err) reject("Failed to create access token :" + err);
                    resolve(token);
                });
            });

            console.log('deu certo o access token')
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: EMAIL,
                    accessToken,
                    clientId: CLIENTID,
                    clientSecret: CLIENTPASSWORD,
                    refreshToken: REFRESHTOKEN,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });
            return transporter;
        } catch (error)
        {
            console.log("Create Transport Error: ", error);
        }
    };

    //emailOptions - who sends what to whom
    const sendEmail = async (emailOptions: any) =>
    {
        try
        {
            let emailTransporter: any = await createTransporter();
            const response = await emailTransporter
                .sendMail(emailOptions)
                .catch((err: Error | null) =>
                    console.log("Email Transport Err: ", err)
                );
            return response;
        } catch (error)
        {
            console.log("Email Transport Error: ", error);
        }
    };

    try
    {
        const emailResponse: any = await sendEmail({
            from: EMAIL,
            to: "leandro27patricio@gmail.com",
            subject: `Menssagem do site AICÁS de ${response.name}`,
            html: `<p>Você recebeu um novo email do site AICÁS</p><br>
      <p><strong>Email: </strong> ${response.email}</p><br>
      <p><strong>Nome: </strong> ${response.name}</p><br>
      <p><strong>Message: </strong> ${response.message}</p><br>
    `,
        });
        console.log("Email enviado", emailResponse);
        return NextResponse.json(
            {
                message: "Email enviado",
            },
            {
                status: 200,
            }
        );
    } catch (error: any)
    {
        console.log("Send Email Error: ", error);
        throw 500;
    }
}