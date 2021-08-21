"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Category_1 = require("./Category");
var Institution = /** @class */ (function () {
    function Institution() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Institution.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Institution.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Institution.prototype, "cnpj", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Institution.prototype, "site", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Institution.prototype, "wallet", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "category_id" }),
        typeorm_1.OneToOne(function () { return Category_1.Category; }),
        __metadata("design:type", Category_1.Category)
    ], Institution.prototype, "category_id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Institution.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Institution.prototype, "updated_at", void 0);
    Institution = __decorate([
        typeorm_1.Entity("institutions"),
        __metadata("design:paramtypes", [])
    ], Institution);
    return Institution;
}());
exports.Institution = Institution;
