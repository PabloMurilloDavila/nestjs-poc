import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ConfigService } from '../../../config.service';

@Injectable()
export class DogsClient {

    endpoint_root: string;

    constructor() {
        this.endpoint_root = ConfigService.get('DOGS_ROOT_ENDPOINT');
    }

    public async all_Breeds() {
        const { data } = await Axios.get(this.endpoint_root + '/breeds/list/all');
        return data;
    }

    public async subBreed_List(breed: string) {
        const { data } = await Axios.get(this.endpoint_root + '/breed/' + breed + '/list');
        return data;
    }

    public async random_Image() {
        const { data } = await Axios.get(this.endpoint_root + '/breeds/image/random');
        return data;
    }

    public async randomBreed_Image(breed: string) {
        const { data } = await Axios.get(this.endpoint_root + '/breed/' + breed + '/images/random');
        return data;
    }

    public async breed_Images(breed: string) {
        const { data } = await Axios.get(this.endpoint_root + '/breed/' + breed + '/images');
        return data;
    }

}