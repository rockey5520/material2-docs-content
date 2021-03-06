import { __read, __spread } from "tslib";
// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
var ExampleData = /** @class */ (function () {
    function ExampleData(example) {
        var _a;
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        var exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
        this.selectorName = this.indexFilename = example + "-example";
        if (exampleConfig.additionalFiles) {
            (_a = this.exampleFiles).push.apply(_a, __spread(exampleConfig.additionalFiles));
        }
        var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
    return ExampleData;
}());
export { ExampleData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvZXhhbXBsZS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpRUFBaUU7QUFDakUsa0VBQWtFO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRXBEOzs7R0FHRztBQUNIO0lBb0JFLHFCQUFZLE9BQWU7O1FBQ3pCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0QsT0FBTztTQUNSO1FBRUQsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEQsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFHLE9BQU8saUJBQVksU0FBVyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFNLE9BQU8sYUFBVSxDQUFDO1FBRTlELElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRTtZQUNqQyxDQUFBLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQSxDQUFDLElBQUksb0JBQUksYUFBYSxDQUFDLGVBQWUsR0FBRTtTQUMxRDtRQUVELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMxRixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZO1lBQ3pCLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGV4YW1wbGUtbW9kdWxlIGZpbGUgd2lsbCBiZSBhdXRvLWdlbmVyYXRlZC4gQXMgc29vbiBhcyB0aGVcbi8vIGV4YW1wbGVzIGFyZSBiZWluZyBjb21waWxlZCwgdGhlIG1vZHVsZSBmaWxlIHdpbGwgYmUgZ2VuZXJhdGVkLlxuaW1wb3J0IHtFWEFNUExFX0NPTVBPTkVOVFN9IGZyb20gJy4vZXhhbXBsZS1tb2R1bGUnO1xuXG4vKipcbiAqIEV4YW1wbGUgZGF0YVxuICogICB3aXRoIGluZm9ybWF0aW9uIGFib3V0IENvbXBvbmVudCBuYW1lLCBzZWxlY3RvciwgZmlsZXMgdXNlZCBpbiBleGFtcGxlLCBhbmQgcGF0aCB0byBleGFtcGxlc1xuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGEge1xuXG4gIC8qKiBEZXNjcmlwdGlvbiBvZiB0aGUgZXhhbXBsZS4gKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvKiogTGlzdCBvZiBmaWxlcyB0aGF0IGFyZSBwYXJ0IG9mIHRoaXMgZXhhbXBsZS4gKi9cbiAgZXhhbXBsZUZpbGVzOiBzdHJpbmdbXTtcblxuICAvKiogU2VsZWN0b3IgbmFtZSBvZiB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIHNlbGVjdG9yTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBOYW1lIG9mIHRoZSBmaWxlIHRoYXQgY29udGFpbnMgdGhlIGV4YW1wbGUgY29tcG9uZW50LiAqL1xuICBpbmRleEZpbGVuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGV4YW1wbGUgY29tcG9uZW50LiBGb3IgZXhhbXBsZXMgd2l0aCBtdWx0aXBsZSBjb21wb25lbnRzLCB0aGlzIHByb3BlcnR5IHdpbGxcbiAgICogaW5jbHVkZSBtdWx0aXBsZSBjb21wb25lbnRzIHRoYXQgYXJlIGNvbW1hIHNlcGFyYXRlZCAoZS5nLiBkaWFsb2ctb3ZlcnZpZXcpXG4gICAqL1xuICBjb21wb25lbnROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZXhhbXBsZTogc3RyaW5nKSB7XG4gICAgaWYgKCFleGFtcGxlIHx8ICFFWEFNUExFX0NPTVBPTkVOVFMuaGFzT3duUHJvcGVydHkoZXhhbXBsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlQ29uZmlnID0gRVhBTVBMRV9DT01QT05FTlRTW2V4YW1wbGVdO1xuXG4gICAgLy8gVE9ETyh0aW5heXVhbmdhbyk6IERvIG5vdCBoYXJkLWNvZGUgZXh0ZW5zaW9uc1xuICAgIHRoaXMuZXhhbXBsZUZpbGVzID0gWydodG1sJywgJ3RzJywgJ2NzcyddLm1hcChleHRlbnNpb24gPT4gYCR7ZXhhbXBsZX0tZXhhbXBsZS4ke2V4dGVuc2lvbn1gKTtcbiAgICB0aGlzLnNlbGVjdG9yTmFtZSA9IHRoaXMuaW5kZXhGaWxlbmFtZSA9IGAke2V4YW1wbGV9LWV4YW1wbGVgO1xuXG4gICAgaWYgKGV4YW1wbGVDb25maWcuYWRkaXRpb25hbEZpbGVzKSB7XG4gICAgICB0aGlzLmV4YW1wbGVGaWxlcy5wdXNoKC4uLmV4YW1wbGVDb25maWcuYWRkaXRpb25hbEZpbGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlTmFtZSA9IGV4YW1wbGUucmVwbGFjZSgvKD86Xlxcd3xcXGJcXHcpL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZXhhbXBsZUNvbmZpZy50aXRsZSB8fCBleGFtcGxlTmFtZS5yZXBsYWNlKC9bXFwtXSsvZywgJyAnKSArICcgRXhhbXBsZSc7XG4gICAgdGhpcy5jb21wb25lbnROYW1lID0gZXhhbXBsZUNvbmZpZy5zZWxlY3Rvck5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZU5hbWUucmVwbGFjZSgvW1xcLV0rL2csICcnKSArICdFeGFtcGxlJztcbiAgfVxufVxuIl19