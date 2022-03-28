/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License. 
 */
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: "cumulocity-video-widget-config-component",
    templateUrl: "./cumulocity-video-widget.config.component.html",
    styleUrls: ["./cumulocity-video-widget.config.component.css"]
})
export class CumulocityVideoWidgetConfig implements OnInit, OnDestroy {

   ngOnInit(): void {
        this.config.streamURL = 'https://cdnuk001.broadcastcdn.net/KUK-BBCNEWSHD/index.m3u8';
        this.config.title = "Title"
    }

    ngOnDestroy(): void {
        //unsubscribe from observables here
    }


    @Input() config: any = {};

    onConfigChanged(): void {
        console.log("CONFIG-CHANGED");
        console.log(this.config);
    }
}