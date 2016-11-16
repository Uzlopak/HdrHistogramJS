import "core-js"
import { EncodableHistogram } from "./EncodableHistogram";
import RecordedValuesIterator from "./RecordedValuesIterator";

export abstract class AbstractHistogramBase extends EncodableHistogram {

  static identityBuilder: number;  

  identity: number;
  autoResize: boolean = false;

  highestTrackableValue: number;
  lowestDiscernibleValue: number;
  numberOfSignificantValueDigits: number;
  
  bucketCount: number;
  /**
   * Power-of-two length of linearly scaled array slots in the counts array. Long enough to hold the first sequence of
   * entries that must be distinguished by a single unit (determined by configured precision).
   */
  subBucketCount: number;
  countsArrayLength: number;
  wordSizeInBytes: number;

  startTimeStampMsec: number = Number.MAX_SAFE_INTEGER;
  endTimeStampMsec: number = 0;
  tag: string | null = null;

  integerToDoubleValueConversionRatio: number = 1.0;

  //percentileIterator : PercentileIterator;

  recordedValuesIterator : RecordedValuesIterator;

  //intermediateUncompressedByteBuffer : ByteBuffer = null;

  //intermediateUncompressedByteArray : number[] = null;


  /* useless ?
  getIntegerToDoubleValueConversionRatio(): number {
      return this.integerToDoubleValueConversionRatio;
  }

  setIntegerToDoubleValueConversionRatio(integerToDoubleValueConversionRatio: number) {
      this.integerToDoubleValueConversionRatio = integerToDoubleValueConversionRatio;
  }*/

  constructor() {
      super();
      this.identity = 0;
      this.highestTrackableValue = 0;
      this.lowestDiscernibleValue = 0;
      this.numberOfSignificantValueDigits = 0;
      this.bucketCount = 0;
      this.subBucketCount = 0;
      this.countsArrayLength = 0;
      this.wordSizeInBytes = 0;
  }
}