import { CanvasBoardConfig } from '../types';
import { BoardLabelObject } from '../../BoardBase';
import MarkupDrawHandler from './MarkupDrawHandler';
interface LabelParams {
    font?: string;
}
export default class Label extends MarkupDrawHandler<LabelParams> {
    stone(canvasCtx: CanvasRenderingContext2D, boardConfig: CanvasBoardConfig, boardObject: BoardLabelObject): void;
}
export {};
