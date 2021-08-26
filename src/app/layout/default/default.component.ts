import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  usercount !:any;
  subscription !: Subscription;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authenticationService: AuthenticationService, private service: UserService) { }

  logout() {
    this.authenticationService.logout();
  }
  ngOnInit(): void {
    this.subscription = this.service.currentMessage.subscribe(message => this.usercount = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
