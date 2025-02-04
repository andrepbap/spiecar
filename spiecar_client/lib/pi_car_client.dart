import 'package:spiecar_client/http_client.dart';

class PiCarClient {
  final String _host = 'http://localhost:3000';
  final HttpClient _httpClient;

  PiCarClient({required HttpClient httpClient}) 
    : _httpClient = httpClient;

  Future<void> moveForward() {
    return _httpClient.post('$_host/car/move/forward');
  }

  Future<void> moveBackward() {
    return _httpClient.post('$_host/car/move/backward');
  }

  Future<void> turnLeft() {
    return _httpClient.post('$_host/car/move/left');
  }

  Future<void> turnRight() {
    return _httpClient.post('$_host/car/move/right');
  }

  Future<void> stop() {
    return _httpClient.post('$_host/car/move/stop');
  }
}