class HttpClient {

    Future<void> post(String url) async {
        final response = await http.post(Uri.parse(url));
    }
    
}