{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red202\green202\blue202;\red23\green23\blue23;\red194\green126\blue101;
\red70\green137\blue204;\red89\green138\blue67;}
{\*\expandedcolortbl;;\cssrgb\c83137\c83137\c83137;\cssrgb\c11765\c11765\c11765;\cssrgb\c80784\c56863\c47059;
\cssrgb\c33725\c61176\c83922;\cssrgb\c41569\c60000\c33333;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
document.getElementById(\cf4 'registrationForm'\cf2 ).addEventListener(\cf4 'submit'\cf2 , \cf5 function\cf2 (event) \{\cb1 \
\cb3     event.preventDefault();\cb1 \
\
\cb3     \cf6 // Get form values\cf2 \cb1 \
\cb3     \cf5 const\cf2  username = document.getElementById(\cf4 'username'\cf2 ).value;\cb1 \
\cb3     \cf5 const\cf2  email = document.getElementById(\cf4 'email'\cf2 ).value;\cb1 \
\cb3     \cf5 const\cf2  password = document.getElementById(\cf4 'password'\cf2 ).value;\cb1 \
\cb3     \cf5 const\cf2  confirmPassword = document.getElementById(\cf4 'confirmPassword'\cf2 ).value;\cb1 \
\
\cb3     \cf6 // Basic validation\cf2 \cb1 \
\cb3     \cf5 if\cf2  (password !== confirmPassword) \{\cb1 \
\cb3         document.getElementById(\cf4 'message'\cf2 ).textContent = \cf4 'Passwords do not match.'\cf2 ;\cb1 \
\cb3         \cf5 return\cf2 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf6 // Send data to server (replace with actual server URL)\cf2 \cb1 \
\cb3     fetch(\cf4 'http://localhost:3000/register'\cf2 , \{\cb1 \
\cb3         method: \cf4 'POST'\cf2 ,\cb1 \
\cb3         headers: \{\cb1 \
\cb3             \cf4 'Content-Type'\cf2 : \cf4 'application/json'\cf2 \cb1 \
\cb3         \},\cb1 \
\cb3         body: JSON.stringify(\{ username, email, password \})\cb1 \
\cb3     \})\cb1 \
\cb3     .then(response \cf5 =>\cf2  response.json())\cb1 \
\cb3     .then(data \cf5 =>\cf2  \{\cb1 \
\cb3         \cf5 if\cf2  (data.success) \{\cb1 \
\cb3             document.getElementById(\cf4 'message'\cf2 ).textContent = \cf4 'Registration successful!'\cf2 ;\cb1 \
\cb3         \} \cf5 else\cf2  \{\cb1 \
\cb3             document.getElementById(\cf4 'message'\cf2 ).textContent = data.message || \cf4 'An error occurred.'\cf2 ;\cb1 \
\cb3         \}\cb1 \
\cb3     \})\cb1 \
\cb3     .catch(error \cf5 =>\cf2  \{\cb1 \
\cb3         console.error(\cf4 'Error:'\cf2 , error);\cb1 \
\cb3         document.getElementById(\cf4 'message'\cf2 ).textContent = \cf4 'An error occurred.'\cf2 ;\cb1 \
\cb3     \});\cb1 \
\cb3 \});\cb1 \
}