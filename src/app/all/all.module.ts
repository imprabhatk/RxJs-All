import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { PromoiseComponent } from './promoise/promoise.component';
import { HomeComponent } from './home/home.component';
import { FromEventComponent } from './from-event/from-event.component';
import { EventFormComponent } from './from-event/event-form/event-form.component';
import { ListComponent } from './from-event/list/list.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomobservableComponent } from './customobservable/customobservable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './subject/subject.component';
import { SubjectExample1Component } from './subjectExample/subject-example1/subject-example1.component';
import { SubjectExample2Component } from './subjectExample/subject-example2/subject-example2.component';
import { SubjectExample3Component } from './subjectExample/subject-example3/subject-example3.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapMobileNotificationComponent } from './concat-map-mobile-notification/concat-map-mobile-notification.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './switch-map-search/switch-map-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestWithLatestFromComponent } from './combine-latest-with-latest-from/combine-latest-with-latest-from.component';
import { ZipForkJoinComponent } from './zip-fork-join/zip-fork-join.component';
import { CatchErrorThrowErrorComponent } from './catch-error-throw-error/catch-error-throw-error.component';

@NgModule({
  declarations: [AllComponent, PromoiseComponent, HomeComponent, 
    FromEventComponent, EventFormComponent, ListComponent, 
    IntervalTimerComponent, OfFromComponent, ToArrayComponent, 
    CustomobservableComponent, MapComponent, PluckComponent, 
    FilterComponent, TapComponent, TakeComponent, RetryComponent,
    DebounceTimeComponent, SubjectComponent, SubjectExample1Component,
    SubjectExample2Component, SubjectExample3Component,
    ReplaySubjectComponent, AsyncSubjectComponent, ConcatComponent,
    MergeComponent, MergeMapComponent, ConcatMapComponent,
    ConcatMapMobileNotificationComponent, SwitchMapComponent,
    SwitchMapSearchComponent, ExhaustMapComponent, ShareReplayComponent,
    CombineLatestWithLatestFromComponent, ZipForkJoinComponent, 
    CatchErrorThrowErrorComponent],
  imports: [
    CommonModule,
    AllRoutingModule,
    LoadingBarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AllModule { }