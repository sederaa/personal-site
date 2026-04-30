export declare type AlignmentMode =
  | "bounds"
  | "visual-center"
  | "visual-center-x"
  | "visual-center-y";

export declare type BackgroundColor = CSSColor | [number, number, number];

export declare type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export declare function calculateNormalizedDimensions(
  measurement: MeasurementResult,
  baseSize: number,
  scaleFactor: number,
  densityFactor?: number,
): {
  width: number;
  height: number;
};

export declare function createLogoSoup(): LogoSoupEngine;

export declare function createNormalizedLogo(
  source: LogoSource,
  measurement: MeasurementResult,
  baseSize: number,
  scaleFactor: number,
  densityFactor?: number,
): NormalizedLogo;

export declare function cropToDataUrl(
  img: HTMLImageElement,
  contentBox: BoundingBox,
): string;

declare type CSSColor = HexColor | RGBFunction | HSLFunction | (string & {});

export declare const DEFAULT_ALIGN_BY: AlignmentMode;

export declare const DEFAULT_BASE_SIZE = 48;

export declare const DEFAULT_CONTRAST_THRESHOLD = 10;

export declare const DEFAULT_CROP_TO_CONTENT = false;

export declare const DEFAULT_DENSITY_AWARE = true;

export declare const DEFAULT_DENSITY_FACTOR = 0.5;

export declare const DEFAULT_GAP = 28;

export declare const DEFAULT_SCALE_FACTOR = 0.5;

export declare function getVisualCenterTransform(
  logo: NormalizedLogo,
  alignBy?: AlignmentMode,
): string | undefined;

declare type HexColor = `#${string}`;

declare type HSLFunction = `hsl(${string})` | `hsla(${string})`;

/** The imperative engine returned by `createLogoSoup()` */
export declare type LogoSoupEngine = {
  /** Trigger a processing run. Call when inputs change. */
  process(options: ProcessOptions): void;
  /** Cancel in-flight work without tearing down the engine. */
  cancel(): void;
  /** Subscribe to state changes. Returns an unsubscribe function. */
  subscribe(listener: () => void): () => void;
  /**
   * Get current immutable snapshot.
   * Must return the same reference if nothing changed.
   */
  getSnapshot(): LogoSoupState;
  /** Cleanup blob URLs, cancel in-flight work */
  destroy(): void;
};

/** Immutable state snapshot returned by the engine */
export declare type LogoSoupState = {
  status: "idle" | "loading" | "ready" | "error";
  normalizedLogos: NormalizedLogo[];
  error: Error | null;
};

export declare type LogoSource = {
  src: string;
  alt?: string;
};

export declare type MeasurementResult = {
  width: number;
  height: number;
  contentBox?: BoundingBox;
  pixelDensity?: number;
  visualCenter?: VisualCenter;
  backgroundLuminance?: number;
};

export declare type NormalizedLogo = {
  src: string;
  alt: string;
  originalWidth: number;
  originalHeight: number;
  contentBox?: BoundingBox;
  normalizedWidth: number;
  normalizedHeight: number;
  aspectRatio: number;
  pixelDensity?: number;
  visualCenter?: VisualCenter;
  croppedSrc?: string;
};

/** Options passed to `engine.process()` */
export declare type ProcessOptions = {
  logos: (string | LogoSource)[];
  baseSize?: number;
  scaleFactor?: number;
  contrastThreshold?: number;
  densityAware?: boolean;
  densityFactor?: number;
  cropToContent?: boolean;
  backgroundColor?: BackgroundColor;
};

declare type RGBFunction = `rgb(${string})` | `rgba(${string})`;

export declare type VisualCenter = {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
};

export {};
