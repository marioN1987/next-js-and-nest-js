import { Type } from 'class-transformer';
import { IsNumber, Max, Min } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streaming_content')
export class StreamingContentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255 })
    title: string;

    @Column('text')
    description: string;

    @Column('varchar', { length: 255 })
    thumbnail_url: string;

    @Column('varchar', { length: 255 })
    video_url: string;

    @Column('int')
    year: number;

    @Column('varchar', { length: 255 })
    genre: string;
    
    @Type(() => Number)
    @Column('double')
    rating: number;

    @Column('int')
    duration: number;

    @Column('varchar', { length: 255 })
    cast: string;

    @Column('varchar', { length: 5, nullable: true})
    watch_progress?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}