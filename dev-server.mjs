// Local dev server để test API route (thay thế Vercel serverless khi dev)
import express from 'express';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config(); // load .env

const app = express();
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, role, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Thiếu thông tin bắt buộc' });
  }

  const html = `
<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(7,27,61,.12)">
        <tr>
          <td style="background:linear-gradient(135deg,#071B3D 0%,#1a3a6b 100%);padding:48px 40px;text-align:center">
            <div style="font-size:36px;margin-bottom:12px">💛</div>
            <h1 style="margin:0;color:#C9A84C;font-size:26px;font-weight:800">HTi's Volunteer Club</h1>
            <p style="margin:10px 0 0;color:rgba(255,255,255,.65);font-size:14px">Có một đăng ký tham gia mới!</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 40px 24px">
            <p style="margin:0 0 28px;font-size:15px;color:#555;line-height:1.7">Xin chào Ban chủ nhiệm,<br/>Một thành viên mới vừa gửi đăng ký. Vui lòng liên hệ sớm.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid #edf0f5">
              <tr style="background:#f7f9fc"><td style="padding:14px 20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;width:36%">Họ và tên</td><td style="padding:14px 20px;font-size:15px;font-weight:700;color:#071B3D">${name}</td></tr>
              <tr style="background:#fff"><td style="padding:14px 20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;border-top:1px solid #edf0f5">Email</td><td style="padding:14px 20px;border-top:1px solid #edf0f5"><a href="mailto:${email}" style="color:#1a3a6b;font-weight:600;text-decoration:none">${email}</a></td></tr>
              <tr style="background:#f7f9fc"><td style="padding:14px 20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;border-top:1px solid #edf0f5">Điện thoại</td><td style="padding:14px 20px;font-size:14px;font-weight:600;color:#071B3D;border-top:1px solid #edf0f5">${phone || 'Không cung cấp'}</td></tr>
              <tr style="background:#fff"><td style="padding:14px 20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;border-top:1px solid #edf0f5">Vai trò</td><td style="padding:14px 20px;border-top:1px solid #edf0f5"><span style="display:inline-block;background:linear-gradient(135deg,#C9A84C,#e8c56e);color:#071B3D;padding:5px 16px;border-radius:20px;font-size:12px;font-weight:800">${role}</span></td></tr>
              <tr style="background:#f7f9fc"><td style="padding:14px 20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#999;border-top:1px solid #edf0f5;vertical-align:top">Lời nhắn</td><td style="padding:14px 20px;font-size:14px;color:#444;border-top:1px solid #edf0f5;line-height:1.8">${message || '<em style="color:#bbb">Không có</em>'}</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 40px 40px;text-align:center">
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#C9A84C,#e8c56e);color:#071B3D;font-weight:800;font-size:14px;padding:14px 36px;border-radius:50px;text-decoration:none">✉️ Trả lời ngay</a>
          </td>
        </tr>
        <tr>
          <td style="background:#f7f9fc;border-top:1px solid #edf0f5;padding:24px 40px;text-align:center">
            <p style="margin:0;font-size:12px;color:#aaa">HTi's Volunteer Club · Đại học Duy Tân · Đà Nẵng</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });
    await transporter.sendMail({
      from: `"HTi Volunteer Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO ?? process.env.GMAIL_USER,
      replyTo: email,
      subject: `[HTi Volunteer] Đăng ký mới từ ${name}`,
      html,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gửi email thất bại' });
  }
});

app.listen(3001, () => console.log('📧 Dev email server chạy tại http://localhost:3001'));
