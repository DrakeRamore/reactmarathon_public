function* take(n, iterable) {
    for (const value of iterable) {
        yield value;   
        n--;
        if (n < 0) {
            break;
        } 
    }
}