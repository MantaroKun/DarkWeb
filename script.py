
import http.server
import socketserver
import urllib.parse
import json

PORT = 8000

data_list = list()

class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        # Parsing POST data
        post_data = urllib.parse.parse_qs(post_data.decode())
        print("Received POST data:")
        print(post_data)
        data = dict()
        nome = post_data['nome'][0]
        sobrenome = post_data['sobrenome'][0]
        email = post_data['email'][0]
        sexo = post_data['sexo'][0]
        senhaCad = post_data['senhaCad'][0]
        confirmesenha = post_data['confirmesenha'][0]
        data['nome'] = nome
        data['sobrenome'] = sobrenome
        data['email'] = email
        data['sexo'] = sexo
        data['senhaCad'] = senhaCad
        data['confirmesenha'] = confirmesenha
        data_list.append(data)
        print(data_list)


        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data_list).encode())


    def do_GET(self):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(data_list).encode())

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()