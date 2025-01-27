// Minimal stream shim
class Stream {
    pipe() { return this; }
    on() { return this; }
    once() { return this; }
    emit() { return true; }
    write() { return true; }
    end() { return true; }
}

export default { Stream }; 