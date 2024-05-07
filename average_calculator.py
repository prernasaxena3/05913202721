from flask import Flask, jsonify, request
import requests
from collections import deque

app = Flask(__name__)

window_size = 10
timeout = 0.5  # 500 milliseconds
test_server_url = "http://20.244.56.144/test/"

number_ids = {'p': 'primes', 'f': 'fibo', 'e': 'even', 'r': 'rand'}


def get_numbers(number_id):
    url = f"{test_server_url}{number_ids[number_id]}"
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()  # Raise exception for non-2xx status codes
        return response.json()['numbers']
    except (requests.exceptions.RequestException, KeyError):
        return []


@app.route('/numbers/<numberid>')
def calculate_average(numberid):
    if numberid not in number_ids:
        return jsonify({'error': 'Invalid number ID'}), 400

    numbers_set = deque(maxlen=window_size)  # Use deque for efficient window management

    window_prev_state = list(numbers_set)  # Initially empty

    try:
        new_numbers = get_numbers(numberid)
        numbers_set.extend(new_numbers)  # Add new numbers to the deque

        window_curr_state = list(numbers_set)
        avg = sum(numbers_set) / len(numbers_set) if len(numbers_set) == window_size else 0.0

    except requests.exceptions.RequestException:
        window_curr_state = window_prev_state
        avg = 0.0

    return jsonify({
        'windowPrevState': window_prev_state,
        'windowCurrState': window_curr_state,
        'numbers': new_numbers,
        'avg': avg
    })


if __name__ == '__main__':
    app.run(debug=True)
