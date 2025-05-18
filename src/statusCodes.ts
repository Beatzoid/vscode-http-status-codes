const statusCodes: Record<number, { title: string; content: string }> = {
    // 1xx informational response

    100: {
        title: "100 Continue",
        content:
            "The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request)"
    },
    101: {
        title: "101 Switching Protocols",
        content:
            "The requester has asked the server to switch protocols and the server has agreed to do so"
    },
    102: {
        title: "102 Processing",
        content:
            "This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost"
    },
    103: {
        title: "103 Early Hints",
        content:
            "Used to return some response headers before final HTTP message"
    },

    // 2xx Success

    200: {
        title: "200 OK",
        content:
            " Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action"
    },
    201: {
        title: "201 Created",
        content:
            "The request has been fulfilled, resulting in the creation of a new resource."
    },
    202: {
        title: "202 Accepted",
        content:
            "The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place"
    },
    203: {
        title: "203 Non-Authoritative Information",
        content:
            "The request was successful but returned metainformation that may be from another source"
    },
    204: {
        title: "204 No Content",
        content:
            "The server has successfully fulfilled the request and that there is no additional content to send in the response message body"
    },
    205: {
        title: "205 Reset Content",
        content:
            'The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server. '
    },
    206: {
        title: "206 Partial Content",
        content:
            "The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header."
    },
    207: {
        title: "207 Multi-Status",
        content:
            "This code is similar to 200 OK, but is used when the response to a request might be made up of a number of separate responses, and when the user agent is expected to read only a subset of the responses. "
    },
    208: {
        title: "208 Already Reported",
        content:
            "This code is similar to 207 Multi-Status, but the client can understand that some members of the set have already been responded to by the server and that no additional members remain to be responded to."
    },
    226: {
        title: "226 IM Used",
        content:
            "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
    },

    // 3xx Redirection

    300: {
        title: "300 Multiple Choices",
        content:
            "Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different formats depending on the user's preferences"
    },
    301: {
        title: "301 Moved Permanently",
        content:
            "This and all future requests should be directed to the given URI"
    },
    302: {
        title: "302 Found",
        content:
            "The requested resource resides temporarily under a different URI"
    },
    303: {
        title: "303 See Other",
        content:
            "The response to the request can be found under a different URI and SHOULD be retrieved using a GET method on that resource. This method exists primarily to allow the output of a POST-activated script to redirect the user agent to a resource that is meaningful to the user"
    },
    304: {
        title: "304 Not Modified",
        content:
            "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-Match. This response is primarily intended to allow the quick update of certain objects like style sheets or images"
    },
    305: {
        title: "305 Use Proxy",
        content:
            "The requested resource MUST be accessed through the proxy given by the Location field. The Location field gives the URI of the proxy. The recipient is expected to repeat this single request via the proxy. 305 responses MUST only be generated by origin servers"
    },
    307: {
        title: "307 Temporary Redirect",
        content:
            "The requested resource resides temporarily under a different URI"
    },
    308: {
        title: "308 Permanent Redirect",
        content:
            "The requested resource resides permanently under a different URI"
    },

    // 4xx Client Errors

    400: {
        title: "400 Bad Request",
        content:
            "The server cannot or will not process the request due to an apparent client error"
    },

    401: {
        title: "401 Unauthorized",
        content:
            "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided"
    },
    402: {
        title: "402 Payment Required",
        content: " reserved for future use"
    },
    403: {
        title: "403 Forbidden",
        content:
            "The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference"
    },
    404: {
        title: "404 Not Found",
        content: "The server can't find the requested resource"
    },
    405: {
        title: "405 Method Not Allowed",
        content:
            "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI"
    },
    406: {
        title: "406 Not Acceptable",
        content:
            "The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request. "
    },
    407: {
        title: "407 Proxy Authentication Required",
        content:
            "The client needs to authenticate itself in order to use a proxy. The proxy MUST return a Proxy-Authenticate header field (section 14.33) containing a challenge applicable to the proxy for the requested resource"
    },
    408: {
        title: "408 Request Timeout",
        content:
            "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time"
    },
    409: {
        title: "409 Conflict",
        content:
            "Indicates that the request could not be processed because of conflict in the request, such as an edit conflict"
    },
    410: {
        title: "410 Gone",
        content:
            'Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "410" status code is used only when there is a reasonable chance that the resource will be available again in the future. If a resource is permanently unavailable, the status code 404 Not Found should be used instead'
    },
    411: {
        title: "411 Length Required",
        content:
            "The request did not specify the length of its content, which is required by the requested resource"
    },
    412: {
        title: "412 Precondition Failed",
        content:
            "The server does not meet one of the preconditions that the requester put on the request"
    },
    413: {
        title: "413 Payload Too Large",
        content:
            "The request is larger than the server is willing or able to process"
    },
    414: {
        title: "414 URI Too Long",
        content: "The URI provided was too long for the server to process"
    },
    415: {
        title: "415 Unsupported Media Type",
        content:
            "The request entity has a media type which the server or resource does not support"
    },
    416: {
        title: "416 Requested Range Not Satisfiable",
        content:
            "The client has asked for a portion of the file, but the server cannot supply that portion"
    },
    417: {
        title: "417 Expectation Failed",
        content:
            "The server cannot meet the requirements of the Expect request-header field"
    },
    418: {
        title: "418 I'm a teapot",
        content: " / RFC 2324"
    },
    421: {
        title: "421 Misdirected Request",
        content:
            "The request was directed at a server that is not able to produce a response"
    },
    422: {
        title: "422 Unprocessable Entity",
        content:
            "The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate), but was unable to process the contained instructions"
    },
    423: {
        title: "423 Locked",
        content: "The source or destination resource of a method is locked"
    },
    424: {
        title: "424 Failed Dependency",
        content:
            "The request failed because it depended on another request and that request failed"
    },
    426: {
        title: "426 Upgrade Required",
        content:
            "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol"
    },
    428: {
        title: "428 Precondition Required",
        content:
            "The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict"
    },
    429: {
        title: "429 Too Many Requests",
        content:
            "The user has sent too many requests in a given amount of time (" +
            "rate limiting)"
    },
    431: {
        title: "431 Request Header Fields Too Large",
        content:
            "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large"
    },
    451: {
        title: "451 Unavailable For Legal Reasons",
        content:
            "The server is denying access to the resource as a consequence of a legal demand (for example, a governmental censorship or court order)."
    },


    // 5xx Server Errors

    500: {
        title: "500 Internal Server Error",
        content:
            "The server encountered an unexpected condition that prevented it from fulfilling the request"
    },
    501: {
        title: "501 Not Implemented",
        content:
            "The server does not support the functionality required to fulfill the request"
    },
    502: {
        title: "502 Bad Gateway",
        content:
            "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request"
    },
    503: {
        title: "503 Service Unavailable",
        content:
            "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server"
    },
    504: {
        title: "504 Gateway Timeout",
        content:
            "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (ex: HTTP, FTP, LDAP)"
    },
    505: {
        title: "505 HTTP Version Not Supported",
        content:
            "The server is unable to handle the request using the HTTP protocol version specified in the request"
    },
    506: {
        title: "506 Variant Also Negotiates",
        content:
            "Transparent content negotiation for the request results in a circular reference"
    },
    507: {
        title: "507 Insufficient Storage",
        content:
            "The server is unable to store the representation needed to complete the request"
    },
    508: {
        title: "508 Loop Detected",
        content:
            "The server detected an infinite loop while processing the request"
    },
    510: {
        title: "510 Not Extended",
        content:
            "The server is not capable of representing the request using the extensible XML syntax"
    },
    511: {
        title: "511 Network Authentication Required",
        content: "The client needs to authenticate to gain network access"
    }
};

export default statusCodes;
