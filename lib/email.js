import nodemailer from "nodemailer";

export async function sendRegistrationEmail(userData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const formattedAmount = userData.amount
    ? `₦${Number(userData.amount).toLocaleString()}`
    : "N/A";

  const mailOptions = {
    from: `"Jovia Network" <${process.env.SMTP_USER}>`,
    to: "chiplugtv@gmail.com",
    subject: `🎉 New Paid Registration - ${userData.fullname}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Jovia Network Registration</title>
    </head>
    <body style="margin:0; padding:0; background-color:#05010d; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#ffffff;">
      
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#05010d; padding:40px 10px;">
        <tr>
          <td align="center">
            
            <!-- Main Email Container -->
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; width:100%; background-color:#0a0518; border-radius:24px; border:1px solid rgba(226,200,118,0.2); overflow:hidden;">
              
              <!-- Header Gradient Banner -->
              <tr>
                <td align="center" style="background: linear-gradient(135deg, #0a0518 0%, #1e0933 50%, #0a0518 100%); padding:40px 30px; border-bottom:1px solid rgba(255,255,255,0.08);">
                  
                  <img src="https://jovianetwork.ng/src/assets/img/jovia.png" alt="Jovia Network" style="height:55px; width:auto; display:block; margin-bottom:24px;" />
                  
                  <span style="background-color:rgba(226,200,118,0.15); color:#E2C876; border:1px solid rgba(226,200,118,0.3); font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:1.5px; padding:6px 16px; border-radius:100px; display:inline-block; margin-bottom:16px;">
                    Verified Payment
                  </span>

                  <h1 style="color:#ffffff; margin:0; font-size:28px; font-weight:900; letter-spacing:-0.5px;">
                    Payment Successful
                  </h1>

                  <p style="color:#94a3b8; margin-top:10px; margin-bottom:0; font-size:15px; leading-height:1.5;">
                    A new member has completed their activation on Jovia Network.
                  </p>

                </td>
              </tr>

              <!-- Content Section -->
              <tr>
                <td style="padding:32px 30px;">
                  
                  <h2 style="color:#E2C876; margin-top:0; margin-bottom:20px; font-size:18px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">
                    Subscriber Details
                  </h2>

                  <!-- Data Table -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                    
                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Full Name</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#ffffff; font-weight:700; font-size:14px; text-align:right;">${userData.fullname}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Email Address</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#ffffff; font-weight:700; font-size:14px; text-align:right;">${userData.email}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Phone Number</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#ffffff; font-weight:700; font-size:14px; text-align:right;">${userData.phone}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Plan Selected</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#C726D4; font-weight:800; font-size:14px; text-align:right;">Jovia ${userData.plan}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Amount Paid</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#E2C876; font-weight:800; font-size:16px; text-align:right;">${formattedAmount}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Transaction Ref</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#ffffff; font-family:monospace; font-size:13px; text-align:right;">${userData.tx_ref}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#94a3b8; font-size:14px;">Transaction ID</td>
                      <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.08); color:#ffffff; font-family:monospace; font-size:13px; text-align:right;">${userData.transaction_id || "N/A"}</td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; color:#94a3b8; font-size:14px;">Payment Status</td>
                      <td style="padding:12px 0; color:#10B981; font-weight:800; font-size:14px; text-align:right;">PAID / CONFIRMED</td>
                    </tr>

                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="background-color:#05010d; padding:24px; border-top:1px solid rgba(255,255,255,0.08);">
                  
                  <p style="margin:0; color:#cbd5e1; font-size:13px; font-weight:700; letter-spacing:0.5px;">
                    Jovia Network Ecosystem
                  </p>

                  <p style="margin-top:6px; margin-bottom:0; color:#64748b; font-size:11px;">
                    Registration Date: ${new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })}
                  </p>

                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}