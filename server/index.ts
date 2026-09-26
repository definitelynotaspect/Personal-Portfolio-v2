import express from "express";
import { createServer } from "http";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createContactEmail({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) {
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#f4f1eb;
  color:#211f1c;
  font-family:Arial, Helvetica, sans-serif;
">

  <!-- Main wrapper -->
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background:#f4f1eb; width:100%;"
  >
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Email container -->
        <table
          role="presentation"
          width="640"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width:100%;
            max-width:640px;
            background:#faf9f6;
            border:1px solid #d9d4ca;
          "
        >

          <!-- Header -->
          <tr>
            <td
              style="
                padding:24px 28px;
                border-bottom:1px solid #d9d4ca;
              "
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>

                  <!-- Logo -->
                  <td valign="middle">
                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tr>
                        <td
                          width="34"
                          height="34"
                          align="center"
                          valign="middle"
                          style="
                            width:34px;
                            height:34px;
                            background:#e8e3da;
                            border:1px solid #d4cec3;
                            color:#211f1c;
                            font-family:monospace;
                            font-size:13px;
                            font-weight:bold;
                          "
                        >
                          BD
                        </td>

                        <td
                          style="
                            padding-left:12px;
                            color:#211f1c;
                            font-family:monospace;
                            font-size:13px;
                            font-weight:bold;
                            letter-spacing:2px;
                          "
                        >
                          BJAY DUQUE
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Status -->
                  <td
                    align="right"
                    valign="middle"
                    style="
                      font-family:monospace;
                      font-size:11px;
                      color:#6f6a62;
                      white-space:nowrap;
                    "
                  >
                    PORTFOLIO / CONTACT
                  </td>

                </tr>
              </table>
            </td>
          </tr>


          <!-- Intro -->
          <tr>
            <td style="padding:42px 36px 26px;">

              <div
                style="
                  font-family:monospace;
                  font-size:11px;
                  line-height:18px;
                  color:#b85f32;
                  letter-spacing:1px;
                  margin-bottom:16px;
                "
              >
                001 / NEW MESSAGE
              </div>

              <h1
                style="
                  margin:0;
                  padding:0;
                  color:#211f1c;
                  font-family:Georgia, 'Times New Roman', serif;
                  font-size:42px;
                  line-height:1.08;
                  font-weight:500;
                  letter-spacing:-1.5px;
                "
              >
                ${safeSubject}
              </h1>

            </td>
          </tr>


          <!-- Sender information -->
          <tr>
            <td style="padding:0 36px 28px;">

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>

                  <td
                    style="
                      width:50%;
                      padding-right:12px;
                      vertical-align:top;
                    "
                  >
                    <div
                      style="
                        font-family:monospace;
                        font-size:10px;
                        color:#b85f32;
                        margin-bottom:6px;
                        text-transform:uppercase;
                      "
                    >
                      from /
                    </div>

                    <div
                      style="
                        font-size:14px;
                        line-height:20px;
                        color:#211f1c;
                        word-break:break-word;
                      "
                    >
                      ${safeEmail}
                    </div>
                  </td>


                  <td
                    style="
                      width:50%;
                      padding-left:12px;
                      vertical-align:top;
                    "
                  >
                    <div
                      style="
                        font-family:monospace;
                        font-size:10px;
                        color:#b85f32;
                        margin-bottom:6px;
                        text-transform:uppercase;
                      "
                    >
                      to /
                    </div>

                    <div
                      style="
                        font-size:14px;
                        line-height:20px;
                        color:#211f1c;
                        word-break:break-word;
                      "
                    >
                      Bjay Duque
                    </div>
                  </td>

                </tr>
              </table>

            </td>
          </tr>


          <!-- Message -->
          <tr>
            <td style="padding:0 36px 36px;">

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  border:1px solid #d9d4ca;
                  background:#f4f1eb;
                "
              >
                <tr>
                  <td style="padding:26px 26px 28px;">

                    <div
                      style="
                        font-family:monospace;
                        font-size:10px;
                        color:#b85f32;
                        letter-spacing:1px;
                        margin-bottom:16px;
                      "
                    >
                      MESSAGE.TXT
                    </div>

                    <div
                      style="
                        color:#39352f;
                        font-size:15px;
                        line-height:1.8;
                        word-break:break-word;
                      "
                    >
                      ${safeMessage}
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>


          <!-- Reply button -->
          <tr>
            <td style="padding:0 36px 42px;">

              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    style="
                      background:#bc6536;
                      border:1px solid #a9552b;
                    "
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        display:inline-block;
                        padding:14px 22px;
                        color:#ffffff;
                        text-decoration:none;
                        font-family:monospace;
                        font-size:12px;
                        font-weight:bold;
                        letter-spacing:.5px;
                      "
                    >
                      REPLY TO ${safeEmail} ↗
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>


          <!-- Footer -->
          <tr>
            <td
              style="
                padding:22px 36px;
                border-top:1px solid #d9d4ca;
                background:#eeebe5;
              "
            >

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>

                  <td
                    style="
                      font-family:monospace;
                      font-size:10px;
                      line-height:17px;
                      color:#777169;
                    "
                  >
                    BJAY DUQUE<br>
                    COMPUTER SCIENCE · BUILDER
                  </td>

                  <td
                    align="right"
                    style="
                      font-family:monospace;
                      font-size:10px;
                      line-height:17px;
                      color:#777169;
                    "
                  >
                    PORTFOLIO CONTACT<br>
                    © ${new Date().getFullYear()}
                  </td>

                </tr>
              </table>

            </td>
          </tr>

        </table>


        <!-- Outside footer -->
        <div
          style="
            max-width:640px;
            padding-top:18px;
            color:#8a847b;
            font-family:monospace;
            font-size:10px;
            line-height:16px;
            text-align:center;
          "
        >
          This message was sent through the contact form on Bjay Duque's portfolio.
        </div>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}


async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.json({ limit: "20kb" }));


  // ==========================================
  // CONTACT FORM
  // ==========================================

  app.post("/api/contact", async (req, res) => {
    const {
      email,
      subject,
      message,
    } = req.body as {
      email?: unknown;
      subject?: unknown;
      message?: unknown;
    };


    // Validate fields
    if (
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !/^\S+@\S+\.\S+$/.test(email.trim()) ||
      !subject.trim() ||
      !message.trim()
    ) {
      res.status(400).json({
        error: "Please complete all fields with a valid email address.",
      });

      return;
    }


    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    const smtpUser = process.env.GMAIL_USER;

    const smtpPassword =
      process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

    const to =
      process.env.CONTACT_TO_EMAIL ||
      "duquebjay@gmail.com";


    // Check SMTP configuration
    if (!smtpUser || !smtpPassword) {
      console.error(
        "Contact email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD."
      );

      res.status(503).json({
        error:
          "The contact form is not configured yet. Please email me directly instead.",
      });

      return;
    }


    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,

        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });


      const html = createContactEmail({
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
      });


      await transporter.sendMail({
        from: `"Bjay Duque Portfolio" <${smtpUser}>`,
        to,

        // Clicking Reply in Gmail will reply directly to the visitor
        replyTo: cleanEmail,

        subject: `[Portfolio] ${cleanSubject}`,

        // Plain-text fallback
        text: `
NEW PORTFOLIO MESSAGE

Subject: ${cleanSubject}

From: ${cleanEmail}

Message:
${cleanMessage}

------------------------------
Bjay Duque
Computer Science · Builder
Portfolio Contact
        `.trim(),

        // Styled HTML email
        html,
      });


      res.status(200).json({
        ok: true,
      });

    } catch (error) {
      console.error(
        "Contact email request failed:",
        error
      );

      res.status(502).json({
        error:
          "Your note could not be sent. Please try again shortly.",
      });
    }
  });


  // Static files
  app.use(express.static(staticPath));


  // Client-side routing
  app.get("*", (_req, res) => {
    res.sendFile(
      path.join(staticPath, "index.html")
    );
  });


  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(
      `Server running on http://localhost:${port}/`
    );
  });
}


startServer().catch(console.error);