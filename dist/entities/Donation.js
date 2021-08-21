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
var Institution_1 = require("./Institution");
var Donation = /** @class */ (function () {
    function Donation() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Donation.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Donation.prototype, "isAnonymousDonation", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Donation.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Donation.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Donation.prototype, "quantityCoin", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "institution_id" }),
        typeorm_1.ManyToOne(function () { return Institution_1.Institution; }, function (institution) { return institution.id; }),
        __metadata("design:type", Institution_1.Institution)
    ], Donation.prototype, "institutionId", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Donation.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Donation.prototype, "updated_at", void 0);
    Donation = __decorate([
        typeorm_1.Entity("donations"),
        __metadata("design:paramtypes", [])
    ], Donation);
    return Donation;
}());
exports.Donation = Donation;
