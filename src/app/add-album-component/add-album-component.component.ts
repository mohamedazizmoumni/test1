import { Component } from '@angular/core';
import { album } from '../model/album';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-add-album-component',
  templateUrl: './add-album-component.component.html',
  styleUrls: ['./add-album-component.component.css'],
})
export class AddAlbumComponentComponent {
  album: album=new album();
  

}
