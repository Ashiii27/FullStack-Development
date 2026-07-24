What is ECMAScript?

![alt text](image-2.png)

This is a scripting languuage specification in which javaScript is based

![alt text](image-3.png)

common js browser engines 

1. V8 - google chrome,chromium - C
2. SpiderMonkey - used by Mozilla - C+Rust

JavaScript is a language and NodeJS is runtime
Bun is also a language used for backend programming and it is significantly faster than NodeJS in execution and its written in Zig.

What can we do with JS?
1)Create CLIs (command line interface)
2)Create a video Player
3)Create a game
4)Create an HTTP server (biggest usecase)

What is an HTTP Server?

HTTP stands for HyperText Transfer Protocol : A protocol that is defined for machines to communicate

Specifically for websites, it is the most common way for your machines to talk to its backend. 

![alt text](image-4.png)

In the end , it is the client throwing some information at the server .... Server doing something with that information and responding back with the final result.


Client Side of HTTP Protocol:
![alt text](image-5.png)

Server Side of HTTP Protocol:
![alt text](image-6.png)

How communication happens??
![alt text](image-7.png)

1 - Browser parses the URL
2 - Does a DNS lookup ( converts website into IP)
3 - Establishes a connection to the IP ( performs handshake)

Common methods used to send requests to backend server are:
1)Post
2)Get
3)Delete
4)Put


![alt text](image-8.png)

Common status codes by which backend responds :

1. 200 - everything is ok
2. 404 - page/route not found
3. 403 - authentication issues
4. 500 - internal server error

There are many libraries that allow us to create HTTP servers ... The most famous one is express
