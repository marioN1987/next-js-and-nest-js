import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streaming_content')
export class StreamingContentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbnail_url: string;

    @Column()
    video_url: string;

    @Column('int')
    year: number;

    @Column()
    genre: string;
    
    @Type(() => Number)
    @Column('double')
    rating: number;

    @Column('int')
    duration: number;

    @Column()
    cast: string;

    @Column('int')
    watch_progress?: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}