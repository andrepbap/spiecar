import 'package:http/http.dart' as http;

class HttpClient {

    Future<void> post(String url) async {
        final response = await http.post(Uri.parse(url));

        if (response.statusCode != 200) {
            print('Failed to post to $url');
        }

        print('Posted to $url');

        return;
    }
    
}