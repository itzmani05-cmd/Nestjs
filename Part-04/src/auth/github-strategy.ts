import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,Profile} from "passport-github2";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy,'github'){
    constructor(){
        super({
            clientID:process.env.GITHUB_CLIENT_ID!,
            clientSecret:process.env.GITHUB_CLIENT_SECRET!,
            callbackURL:'http://localhost:3000/auth/github/redirect',
            scope:['email','profile']
        })
    }

    async validate(
        accessToken:string,
        refreshToken:string,
        profile:Profile,
    ):Promise<any>{
        return{
            githubId:profile.id,
            username:profile.username,
            displayName:profile.displayName,
            avatarUrl:profile.photos?.[0].value,
            email:profile.emails?.[0].value,
            
        }
    }
}