import Encoder from "./Encoder";
import * as fflate from 'fflate';

export default class FFlateEncoder implements Encoder {
    encode(arrayBuffer: ArrayBufferLike): ArrayBufferLike {
        return fflate.gzipSync(new Uint8Array(arrayBuffer), {
            mtime: '6/9/1978 12:00 PM', //  fixed time to avoid changes if content doesn't change
        }).buffer;
    }
    decode(arrayBuffer: ArrayBufferLike): ArrayBufferLike {
        return fflate.gunzipSync(new Uint8Array(arrayBuffer)).buffer;
    }

}
