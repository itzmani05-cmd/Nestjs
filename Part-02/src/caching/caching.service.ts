import { Injectable,Inject } from '@nestjs/common';
import {CACHE_MANAGER} from '@nestjs/cache-manager';
import type {Cache} from 'cache-manager';

@Injectable()
export class CachingService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager:Cache,){} //this one gives access to get(),set(),del(),clear()

    async setCache(){
        await this.cacheManager.set('user','Manikandan');
        return 'Cache Added';
    }

    async getCache() {
        const value=await this.cacheManager.get('user');
        return value;
    }

    async deleteCache(){
        await this.cacheManager.del('user');
        return 'Cache Deleted'
    }

    async clearCache(){
        await this.cacheManager.clear();
        return 'All Cache Cleared';
    }
}
