"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var DonationsRepository_1 = require("../repositories/DonationsRepository");
var QrCodePixService_1 = require("./QrCodePixService");
var InstitutionRepository_1 = require("../repositories/InstitutionRepository");
var MarginGainService_1 = require("./MarginGainService");
var AppError_1 = require("../errors/AppError");
var createQrCodePixService = new QrCodePixService_1.CreateQrCodePixService();
var marginGainService = new MarginGainService_1.MarginGainService();
var DonationService = /** @class */ (function () {
    function DonationService() {
    }
    DonationService.prototype.create = function (donationParam) {
        return __awaiter(this, void 0, void 0, function () {
            var donationRepository, institutionRepository, isAnonymousDonation, name, email, quantityCoin, 
            //currencyValue,
            //totalValue,
            institutionId, adminsMarginGain, donationTotalValue, personKeyReceiveValue, institution, createCharge, createQRCode, donation, donationWithQRCode, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        donationRepository = typeorm_1.getCustomRepository(DonationsRepository_1.DonationsRepository);
                        institutionRepository = typeorm_1.getCustomRepository(InstitutionRepository_1.InstitutionRepository);
                        isAnonymousDonation = donationParam.isAnonymousDonation, name = donationParam.name, email = donationParam.email, quantityCoin = donationParam.quantityCoin, institutionId = donationParam.institutionId;
                        return [4 /*yield*/, marginGainService.get(20)];
                    case 1:
                        adminsMarginGain = _a.sent();
                        donationTotalValue = parseFloat(adminsMarginGain) * parseFloat(quantityCoin);
                        personKeyReceiveValue = "71cdf9ba-c695-4e3c-b010-abb521a3f1be";
                        return [4 /*yield*/, institutionRepository.findOne(institutionId)];
                    case 2:
                        institution = _a.sent();
                        if (!institution) {
                            console.log("InstitutionId is empty");
                            throw new AppError_1.AppError("Erro interno com propriedade do banco de dados, contate o administrador");
                        }
                        return [4 /*yield*/, createQrCodePixService.createCharge(donationTotalValue.toString(), personKeyReceiveValue)];
                    case 3:
                        createCharge = _a.sent();
                        return [4 /*yield*/, createQrCodePixService.generateQrCode(createCharge.data.loc.id)];
                    case 4:
                        createQRCode = _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 8, , 9]);
                        donation = donationRepository.create({
                            isAnonymousDonation: isAnonymousDonation,
                            name: name,
                            email: email,
                            quantityCoin: 2,
                            institutionId: institution,
                        });
                        if (!donation) return [3 /*break*/, 7];
                        return [4 /*yield*/, donationRepository.save(donation)];
                    case 6:
                        _a.sent();
                        donationWithQRCode = { donation: donation, createQRCode: createQRCode };
                        return [2 /*return*/, donationWithQRCode];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, err_1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return DonationService;
}());
exports.DonationService = DonationService;
