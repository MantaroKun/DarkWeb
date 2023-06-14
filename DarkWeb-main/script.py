
import http.server
import socketserver
import json

PORT = 8000

data_list = list()

class MyHandler(http.server.BaseHTTPRequestHandler):
    
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type")
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        post_data = json.loads(post_data)
        print("Received POST data:")
        data_list.append([post_data])
        file = open('sad.json', 'w')
        string = json.dumps(data_list, indent=4)
        file.write(string)
        print(string)
        self._set_headers()
        self.wfile.write(json.dumps(data_list).encode())

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        if self.path == '/data':
            self._set_headers()
            self.wfile.write(json.dumps(data_list).encode())
        else:
            self.send_response(404)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Invalid route'}).encode())

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()