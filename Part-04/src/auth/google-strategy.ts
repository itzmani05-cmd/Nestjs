import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,Profile,VerifyCallback} from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,'google'){
    constructor(){
        super({
            clientID:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL:'http://localhost:3000/auth/google/redirect',
            scope:['email','profile']
        })
    }

    async validate(
        accessToken:string,
        refreshToken:string,
        profile:Profile,
        done:VerifyCallback
    ):Promise<any>{
        const user={
            email:profile.emails?.[0].value,
            firstName:profile.name?.givenName,
            lastName:profile.name?.familyName,
            picture:profile.photos?.[0].value,
        }
        done(null,user);
    }
}