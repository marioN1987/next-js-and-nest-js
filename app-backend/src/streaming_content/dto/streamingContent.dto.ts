import { IsString, IsNumber, IsUrl, IsUUID, Max, Min } from "class-validator";
import type { UUID } from "crypto";

export class StreamingContentDto {
  @IsUUID()
  id: UUID;

  @IsString({message: "Please enter valid title"})
  title: string;

  @IsString({message: "Please enter valid description"})
  description: string;

  @IsUrl({}, {message: "Invalid thumbnail url"})
  thumbnail_url: string;

  @IsUrl({}, {message: "Invalid video url"})
  video_url: string;

  @IsNumber()
  @Min(1920, { message: 'Year must be greater than 1920' })
  @Max(2025, { message: 'Year must be smaller or equal to 2025' })
  year: number;

  @IsString()
  genre: string;

  @IsNumber({ maxDecimalPlaces: 1 }, { message: 'Price can have at most 1 decimals' })
  @Min(1, { message: 'Rating must be at least 1' })
  @Max(10, { message: 'Rating cannot be more than 10' })
  rating: number;

  @IsNumber({}, {message: "Duration must be number"})
  duration: number;

  @IsString()
  cast: string;

  @IsString()
  watch_progress?: string;
}