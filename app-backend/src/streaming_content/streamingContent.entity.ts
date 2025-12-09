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

    @Column({nullable: true})
    year: number;

    @Column()
    genre: string;

    @Column({ nullable: true })
    rating: number;

    @Column()
    duration: number;

    @Column({ nullable: true })
    cast: string;

    @Column({type: 'int', nullable: true })
    watch_progress?: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}