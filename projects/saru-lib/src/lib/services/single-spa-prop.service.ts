import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { SingleSpaProps } from "../models/single-spa-prop.model";

@Injectable()
export class SingleSpaPropService {
    user: User | undefined;
    singleSpaProps: SingleSpaProps | undefined;

    initialise(user: User): void {
        this.user = user;
    }
    getUser(): User | undefined {    
        return this.user;
    }
}