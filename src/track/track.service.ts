import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track) private trackRepo: typeof Track,
    private trackService: TrackService) {}

    async create() {}

    async getAll() {
        return 'all tracks'
    }

    async getOne() {}

    async delete() {}
}
