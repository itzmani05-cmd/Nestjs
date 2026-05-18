<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  # NestJS Learning Journey 🚀

This repository contains my learning journey in **NestJS**, where I explored core backend development concepts including **modules, controllers, services, middleware, configuration, caching, cookies, event emitters, authentication (JWT), hashing, dependency injection, scopes, and more**.

---

# What is NestJS?

NestJS is a **progressive Node.js framework** for building scalable and maintainable **server-side applications**.

It is built using:

* **Node.js**
* **TypeScript**
* **Express.js** (default) or Fastify

NestJS follows a **modular architecture** and makes backend development more structured and scalable.

It heavily uses concepts like:

* Dependency Injection (DI)
* Modules
* Controllers
* Services
* Middleware
* Guards
* Decorators
* Authentication
* Caching

NestJS is inspired by **Angular architecture**, making it easier to organize backend applications in a clean and maintainable way.

---

# Why NestJS?

### Advantages of NestJS

✅ Scalable Architecture
✅ TypeScript Support
✅ Modular Structure
✅ Dependency Injection
✅ Authentication Support
✅ Middleware Support
✅ JWT Integration
✅ Event Driven Architecture
✅ Caching Support
✅ Clean Project Structure

---

# Installation

## Install Nest CLI

```bash
npm install -g @nestjs/cli
```

---

## Create a New NestJS Project

```bash
nest new folder_name
```

Example:

```bash
nest new nestjs-learning
```

---

## Start Development Server

```bash
npm run start:dev
```

Server runs on:

```text
http://localhost:3000
```

---

# Generate Files Using Nest CLI

Assume:

```text
users
```

is the folder name.

### Generate Module

```bash
nest g module users
```

Creates:

```text
users.module.ts
```

---

### Generate Controller

```bash
nest g controller users
```

Creates:

```text
users.controller.ts
users.controller.spec.ts
```

---

### Generate Service

```bash
nest g service users
```

Creates:

```text
users.service.ts
users.service.spec.ts
```

---

# Topics Covered

## 1. Controllers

Controllers handle incoming HTTP requests and return responses.

Example:

```ts
@Controller('users')
export class UsersController {

  @Get()
  getUsers() {
    return 'Users';
  }
}
```

---

## 2. Services

Services contain business logic.

Example:

```ts
@Injectable()
export class UsersService {

  getUsers() {
    return ['Manikandan'];
  }
}
```

---

## 3. Modules

Modules organize the application into reusable blocks.

Example:

```ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

---

## 4. Middleware

Middleware executes before a request reaches the controller.

Common Use Cases:

* Logger Middleware
* Authentication Middleware
* Request Validation

---

## 5. Environment Variables (.env)

Install:

```bash
npm install --save @nestjs/config
```

Used for:

* API Keys
* Database Credentials
* Secret Keys
* Environment Configurations

Example:

```env
PORT=3000
JWT_SECRET=mysecret
```

---

## 6. Dynamic Modules

Dynamic modules allow passing dynamic configuration values.

Example:

```ts
DynamicModuleModule.forRoot(
  'Learning NestJS'
)
```

---

## 7. Dependency Injection (DI)

NestJS automatically injects dependencies into classes.

Example:

```ts
constructor(
 private userService: UsersService
){}
```

---

## 8. Injection Scopes

### DEFAULT

Single shared instance across the application.

### REQUEST

Creates a new instance for every request.

### TRANSIENT

Creates a new instance for every injection.

---

## 9. Circular Dependency

Resolved using:

```ts
forwardRef()
```

When:

```text
Service A depends on Service B
Service B depends on Service A
```

---

## 10. Caching

Install:

```bash
npm install @nestjs/cache-manager cache-manager
```

Methods Covered:

```ts
get()
set()
del()
clear()
```

Used to improve application performance.

---

## 11. Cookies

Install:

```bash
npm install cookie-parser
npm install -D @types/cookie-parser
```

Features Covered:

* Set Cookie
* Get Cookie
* Delete Cookie

Example:

```ts
response.cookie(
 'username',
 'Manikandan'
);
```

---

## 12. Event Emitter

Install:

```bash
npm install --save @nestjs/event-emitter
```

Used for:

* Notifications
* Email Triggers
* Logs
* Event-driven architecture

Example:

```ts
eventEmitter.emit(
 'user.created'
);
```

Listener:

```ts
@OnEvent(
 'user.created'
)
handleUserCreated(){}
```

---

## 13. Authentication (JWT)

Install:

```bash
npm install @nestjs/jwt
```

Used for:

* Login Authentication
* Protected Routes
* Token Verification

JWT Flow:

```text
Login
   ↓
Generate Token
   ↓
Store Token
   ↓
Bearer Token
   ↓
Route Protection
```

---

## 14. Hashing (bcrypt)

Install:

```bash
npm install bcrypt
npm install -D @types/bcrypt
```

Used for:

* Password Security

Hash Password:

```ts
bcrypt.hash(
 password,
 10
)
```

Compare Password:

```ts
bcrypt.compare(
 password,
 hash
)
```

---

# API Testing Tools

* Postman
* Thunder Client
* Hoppscotch

---

# Technologies Used

* NestJS
* TypeScript
* Node.js
* Express.js
* JWT
* bcrypt
* Cookie Parser
* Cache Manager

---

# Learning Progress

### Part-01

* Controllers
* Services
* Modules
* Middleware
* Exception Handling

### Part-02

* Config Module
* Dynamic Module
* Injection Scope
* Circular Dependency
* Cache
* Cookies
* Event Emitter

### Part-03

* Authentication
* JWT
* Guards
* Hashing

---

# Author

**Manikandan**
Computer Science Engineering
Government College of Technology, Coimbatore

### GitHub Repository

https://github.com/itzmani05-cmd/Nestjs

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
