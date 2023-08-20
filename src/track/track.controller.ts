import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
    constructor(private readonly trackService: TrackService) {}

    @Post()
    create() {
        return this.trackService.create();
    }

    @Get()
    getAll() {
        return this.trackService.getAll();
    }

    @Get(':id')
    getOne() {
        return this.trackService.getOne();
    }

    @Delete(':id')
    delete() {
        return this.trackService.delete();
    }
}
