import { TrackService } from './track.service';
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    create(): Promise<void>;
    getAll(): Promise<string>;
    getOne(): Promise<void>;
    delete(): Promise<void>;
}
