import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
function StepperOverviewExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperOverviewExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperOverviewExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper overview
 */
var StepperOverviewExample = /** @class */ (function () {
    function StepperOverviewExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperOverviewExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-overview-example',
                    templateUrl: 'stepper-overview-example.html',
                    styleUrls: ['stepper-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    StepperOverviewExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) { if (rf & 1) {
            var _r24 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener($event) { return ctx.isLinear = !ctx.isLinear; });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
            i0.ɵɵelementStart(4, "mat-step", 3);
            i0.ɵɵelementStart(5, "form", 4);
            i0.ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelement(8, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div");
            i0.ɵɵelementStart(10, "button", 7);
            i0.ɵɵtext(11, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-step", 3);
            i0.ɵɵelementStart(13, "form", 4);
            i0.ɵɵtemplate(14, StepperOverviewExample_ng_template_14_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(15, "mat-form-field");
            i0.ɵɵelement(16, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div");
            i0.ɵɵelementStart(18, "button", 9);
            i0.ɵɵtext(19, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 7);
            i0.ɵɵtext(21, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-step");
            i0.ɵɵtemplate(23, StepperOverviewExample_ng_template_23_Template, 1, 0, "ng-template", 5);
            i0.ɵɵtext(24, " You are now done. ");
            i0.ɵɵelementStart(25, "div");
            i0.ɵɵelementStart(26, "button", 9);
            i0.ɵɵtext(27, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 10);
            i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r24); var _r20 = i0.ɵɵreference(3); return _r20.reset(); });
            i0.ɵɵtext(29, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("linear", ctx.isLinear);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
    return StepperOverviewExample;
}());
export { StepperOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperOverviewExample, [{
        type: Component,
        args: [{
                selector: 'stepper-overview-example',
                templateUrl: 'stepper-overview-example.html',
                styleUrls: ['stepper-overview-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLW92ZXJ2aWV3L3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1vdmVydmlldy9zdGVwcGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDS2xDLGtDQUFrQjs7O0lBV2xCLHFDQUFxQjs7O0lBV3ZCLG9CQUFJOztBRHpCbEM7O0dBRUc7QUFDSDtJQVVFLGdDQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUo3QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBSStCLENBQUM7SUFFakQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7OztnQkFUTyxXQUFXOztnR0FVTixzQkFBc0I7K0RBQXRCLHNCQUFzQjs7WUNYbkMsaUNBQ0U7WUFEd0IseUlBQThCO1lBQ3RELFlBQ0Y7WUFBQSxpQkFBUztZQUNULG9EQUNFO1lBQUEsbUNBQ0U7WUFBQSwrQkFDRTtZQUFBLHVGQUEwQjtZQUMxQixzQ0FDRTtZQUFBLDJCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLDJCQUNFO1lBQUEsa0NBQWtDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNqRCxpQkFBTTtZQUNSLGlCQUFPO1lBQ1QsaUJBQVc7WUFDWCxvQ0FDRTtZQUFBLGdDQUNFO1lBQUEseUZBQTBCO1lBQzFCLHVDQUNFO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFDakIsNEJBQ0U7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsaUNBQ0U7WUFBQSx5RkFBMEI7WUFDMUIsb0NBQ0E7WUFBQSw0QkFDRTtZQUFBLGtDQUFzQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbkQsbUNBQTZDO1lBQTFCLGdLQUFTLFlBQWUsSUFBQztZQUFDLHNCQUFLO1lBQUEsaUJBQVM7WUFDN0QsaUJBQU07WUFDUixpQkFBVztZQUNiLGlCQUF5Qjs7WUFsQ3ZCLGVBQ0Y7WUFERSw4RkFDRjtZQUN3QixlQUFtQjtZQUFuQixxQ0FBbUI7WUFDL0IsZUFBOEI7WUFBOUIsZ0RBQThCO1lBQ2hDLGVBQTRCO1lBQTVCLDhDQUE0QjtZQVUxQixlQUErQjtZQUEvQixpREFBK0I7WUFDakMsZUFBNkI7WUFBN0IsK0NBQTZCOztpQ0RoQnZDO0NBMEJDLEFBcEJELElBb0JDO1NBZlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlck92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzTGluZWFyID0gZmFsc2U7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImlzTGluZWFyID0gIWlzTGluZWFyXCIgaWQ9XCJ0b2dnbGUtbGluZWFyXCI+XG4gIHt7IWlzTGluZWFyID8gJ0VuYWJsZSBsaW5lYXIgbW9kZScgOiAnRGlzYWJsZSBsaW5lYXIgbW9kZSd9fVxuPC9idXR0b24+XG48bWF0LWhvcml6b250YWwtc3RlcHBlciBbbGluZWFyXT1cImlzTGluZWFyXCIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgWW91IGFyZSBub3cgZG9uZS5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInN0ZXBwZXIucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1ob3Jpem9udGFsLXN0ZXBwZXI+XG4iXX0=