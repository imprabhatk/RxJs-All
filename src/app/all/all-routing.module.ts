import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { CatchErrorThrowErrorComponent } from './catch-error-throw-error/catch-error-throw-error.component';
import { CombineLatestWithLatestFromComponent } from './combine-latest-with-latest-from/combine-latest-with-latest-from.component';
import { ConcatMapMobileNotificationComponent } from './concat-map-mobile-notification/concat-map-mobile-notification.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { FilterComponent } from './filter/filter.component';
import { EventFormComponent } from './from-event/event-form/event-form.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ListComponent } from './from-event/list/list.component';
import { HomeComponent } from './home/home.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeComponent } from './merge/merge.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { PromoiseComponent } from './promoise/promoise.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RetryComponent } from './retry/retry.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ZipForkJoinComponent } from './zip-fork-join/zip-fork-join.component';

const routes: Routes = [
  {
    path : '',
    component : AllComponent,
    children : [
      {
        path : '',
        redirectTo : 'Home',
        pathMatch : 'full'
      },
      {
        path : 'Home',
        component : HomeComponent
      },
      {
        path : 'promoise',
        component : PromoiseComponent
      },
      {
        path : 'formevent',
        component : FromEventComponent,
        children : [
          {
            path : '',
            component : ListComponent
          },
          {
            path : 'event-form',
            component : EventFormComponent
          }
        ]
      },
      {
        path : 'interval-timer',
        component :  IntervalTimerComponent
      },
      {
        path : 'of-from',
        component : OfFromComponent
      },
      {
        path : 'to-Array',
        component : ToArrayComponent
      },
      {
        path : 'custom-observable',
        component : CustomobservableComponent
      },
      {
        path : 'map',
        component : MapComponent
      },
      {
        path : 'pluck',
        component : PluckComponent
      },
      {
        path : 'filter',
        component : FilterComponent
      },
      {
        path : 'tap',
        component : TapComponent
      },
      {
        path : 'take',
        component : TakeComponent
      },
      {
        path : 'retry',
        component : RetryComponent
      },
      {
        path : 'debounceTime',
        component : DebounceTimeComponent
      },
      {
        path : 'subject',
        component : SubjectComponent
      },
      {
        path : 'replay-subject',
        component : ReplaySubjectComponent
      },
      {
        path : 'async-subject',
        component : AsyncSubjectComponent
      },
      {
        path : 'concat',
        component : ConcatComponent
      },
      {
        path : 'merge',
        component : MergeComponent
      },
      {
        path : 'mergeMap',
        component : MergeMapComponent
      },
      {
        path : 'concat-map',
        component : ConcatMapComponent
      },
      {
        path : 'concat-map-mobile-notification',
        component : ConcatMapMobileNotificationComponent
      },
      {
        path : 'switch-map',
        component : SwitchMapComponent
      },
      {
        path : 'switch-map-search',
        component : SwitchMapSearchComponent
      },
      {
        path : 'exhaust-map',
        component : ExhaustMapComponent
      },
      {
        path : 'share-replay',
        component : ShareReplayComponent
      },
      {
        path : 'combineLatest-withLatestFrom',
        component : CombineLatestWithLatestFromComponent
      },
      {
        path : 'zip-forkJoin',
        component : ZipForkJoinComponent
      },
      {
        path : 'catchError-throwError',
        component : CatchErrorThrowErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AllRoutingModule { }