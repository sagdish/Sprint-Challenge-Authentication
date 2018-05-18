<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware is function that have access to request and response obj of http request. It modifies/stop/edit object before it get passed to a next action. Session in express is unique info established upon user login/ or from particular device. Bcrypt is hashing algorithm that help encrypt user credentials. Jwt is json web token which could be an alternative to a sessions.

2.  What does bcrypt do in order to prevent attacks?
Bcrypt hashes password or other sensitive information of user. The longer the password is, the more secure is hashed password, to add additional protection we can add how many rounds of hashing will be performed.

3.  What are the three parts of the JSON Web Token?
Header / Payload / Signature. They separated by dots.