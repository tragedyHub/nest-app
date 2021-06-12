import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from './track/track.module';

@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot(`mongodb+srv://admin:t4hQSwLGvUIzRImP@cluster0.zjvoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    ]
})
export class AppModule {

}