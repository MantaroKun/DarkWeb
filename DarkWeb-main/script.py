
import http.server
import socketserver
import urllib.parse
import json

PORT = 8000

data_list = list()

class MyHandler(http.server.BaseHTTPRequestHandler):
    # ...

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        # Parsing POST data
        post_data = urllib.parse.parse_qs(post_data.decode())

        # Extração do campo "nome"
        nome = post_data['nome'][0]

        # Criar a resposta com o nome
        response_data = {'nome': nome}

        # Adicionar a resposta à lista de dados
        data_list.append(response_data)

        # Responder com os dados em formato JSON
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response_data).encode())


    def do_GET(self):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(data_list).encode())

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()