const http = require('http');

const port = 3000;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pravin Jadhav Dashboard</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .dashboard {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }
    .dashboard h1 {
      font-size: 3em;
      margin-bottom: 10px;
    }
    .dashboard p {
      font-size: 1.2em;
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <h1>Welcome, sameer!</h1>
    <p>This is your beautiful custom dashboard.</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlContent);
});

server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});

