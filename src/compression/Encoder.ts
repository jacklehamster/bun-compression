export default interface Encoder {
    encode(arrayBuffer: ArrayBufferLike): ArrayBufferLike;
    decode(arrayBuffer: ArrayBufferLike): ArrayBufferLike;
}
