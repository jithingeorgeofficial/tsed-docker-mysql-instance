import {Controller} from "@tsed/di";
import {Get, ContentType} from "@tsed/schema";
import {User} from "../../entities/User.js";

@Controller("/users")
export class UserController {
  @Get("/")
  @ContentType("text/html")
  async getAllUsers(): Promise<String> {
    return '<a href="https://example.com">Google Login</a>';
  }
}