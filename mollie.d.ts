declare namespace MollieTypes {
    interface CaptureResponse {
        resource: string;
        id: string;
        mode: ApiMode;
        amount: Amount;
        settlementAmount: Amount;
        paymentId: string;
        shipmentId?: string;
        settlementId?: string;
        createdAt: string;
        _links: Links;
    }
    interface Refund {
        amount: Amount;
        description?: string;

        // Access token parameters
        testmode?: boolean;
    }

    interface Payment {
        amount: Amount;
        description: string;
        redirectUrl: string;
        webhookUrl?: string;
        locale?: Locale;
        method?: Method;
        metadata?: any;
        sequenceType?: string;
        customerId?: string;
        mandateId?: string;
        billingEmail?: string;
        billingAddress?: Address;
        shippingAddress?: Address;
        issuer: GiftcardIssuer | IdealIssuer | KbcIssuer;
        dueDate?: string;
        customerReference?: string;
        consumerName?: string;
        consumerAccount?: string;
        details?: any;

        // Access token parameters
        profileId?: string;
        testmode?: boolean;
        applicationFee?: Amount;
    }

    type PaymentStatus =
        |'open'
        | 'canceled'
        | 'pending'
        | 'authorized'
        | 'expired'
        | 'failed'
        | 'paid'

    interface Order {
        amount: Amount;
        orderNumber: string;
        lines: FullOrderLine[];
        billingAddress: OrderAddress;
        shippingAddress?: OrderAddress;
        consumerDateOfBirth?: string;
        redirectUrl: string;
        webhookUrl?: string;
        locale: Locale;
        method: Method;
        payment?: Partial<Payment>;
        metadata?: any;

        // Access token parameters
        profileId?: string;
        testmode: boolean;
    }

    type OrderLineType =
        |'physical'
        | 'discount'
        | 'digital'
        | 'shipping_fee'
        | 'store_credit'
        | 'gift_card'
        | 'surcharge'

    interface OrderLine {
        id: string;
        quantity?: number;
    }

    interface FullOrderLine {
        id?: string;
        type?: OrderLineType;
        name: string;
        quantity: number;
        unitPrice: Amount;
        discountAmount?: Amount;
        totalAmount: Amount;
        vatRate: string;
        vatAmount: Amount;
        sku: string;
        imageUrl: string;
        productUrl: string;
    }

    interface OrderAddress extends Address {
        title?: string;
        givenName: string;
        familyName: string;
        email: string;
        phone?: string;
    }

    type OrderStatus =
        |'created'
        | 'paid'
        | 'authorized'
        | 'canceled'
        | 'shipping'
        | 'completed'
        | 'expired'

    interface Mandate {
        method: MandateMethod;
        consumerName: string;
        consumerAccount: string;
        consumerBic?: string;
        signatureDate?: string;
        mandateReference?: string;

        // Access token parameters
        testmode?: boolean;
    }

    type MandateDetails = MandateDetailsCreditCard | MandateDetailsDirectDebit
    interface MandateDetailsDirectDebit {
        consumerName: string;
        consumerAccount: string;
        consumerBic: string;
    }

    interface MandateDetailsCreditCard {
        cardHolder: string;
        cardNumber: string;
        cardLabel: CardLabel;
        cardFingerprint: string;
        cardExpireDate: string;
    }

    type MandateMethod = 'directdebit'
    type MandateStatus =
        |'valid'
        | 'pending'
        | 'invalid'

    type IdealIssuer = string;
    type GiftcardIssuer =
        'nationalebioscoopbon'
        | 'nationaleentertainmentcard'
        | 'kunstencultuurcadeaukaart'
        | 'podiumcadeaukaart'
        | 'vvvgiftcard'
        | 'webshopgiftcard'
        | 'yourgift'
    type KbcIssuer = 'kbc' | 'cbc'

    interface Customer {
        name?: string;
        email?: string;
        locale: Locale;
        metadata?: any;
    
        // Access token parameters
        testmode?: boolean;
    }

    interface Capture {
        // Access token parameters
        testmode?: false;
    }
      
    interface ChargebackResponse {
        id: string;
        amount: Amount;
        settleAmount: Amount;
        createdAt: string;
        reversedAt: string;
        paymentId: string;
        _links: Links;
    }

    interface CustomerResponse {
        resource: string;
        id: string;
        mode: ApiMode;
        name: string;
        email: string;
        locale: Locale;
        metadata: any;
        createdAt: string;
        _links: Links;
    
        // Access token parameters
        testmode?: boolean;
    }
    interface MandateResponse {
        resource: string;
        id: string;
        mode: ApiMode;
        status: MandateStatus;
        method: 'directdebit'|'creditcard';
        details: MandateDetails;
        mandateReference: string;
        signatureDate: string;
        createdAt: string;
        _links: Links;
    
        // Access token parameters
        testmode?: boolean;
    }
    interface MethodResponse {
        resource: string;
        id: string;
        descriptions: string;
        image: Image;
        _links: Links;
    }
    interface OrderResponse {
        resource: string;
        id: string;
        profileId: string;
        method: string|null;
        mode: ApiMode;
        amount: Amount;
        amountCaptured: Amount|null;
        amountRefunded: Amount|null;
        status: OrderStatus;
        isCancelable: boolean;
        billingAddress: OrderAddress;
        consumerDateOfBirth?: string;
        orderNumber: string;
        shippingAddress: OrderAddress;
        locale: string;
        metadata: any;
        redirectUrl: string|null;
        lines: OrderLineResponse[];
        webhookUrl?: string;
        createdAt: string;
        expiresAt?: string;
        expiredAt?: string;
        paidAt?: string;
        authorizedAt?: string;
        canceledAt?: string;
        completedAt?: string;
        _links: Links;
    }
    
    interface OrderLineResponse {
        resource: string;
        id: string;
        orderId: string;
        type: OrderLineType;
        name: string;
        status: OrderStatus;
        isCancelable: boolean;
        quantity: number;
        quantityShipped: number;
        amountShipped: number;
        quantityRefunded: number;
        amountRefunded: number;
        quantityCanceled: number;
        amountCanceled: number;
        shippableQuantity: number;
        refundableQuantity: number;
        unitPrice: Amount;
        discountAmount?: Amount;
        totalAmount: Amount;
        vatRate: string;
        vatAmount: Amount;
        sku?: string;
        createdAt: string;
        _links: Links;
    }

    interface PaymentResponse {
        resource: string;
        id: string;
        mode: ApiMode;
        createdAt: string;
        status: PaymentStatus;
        isCancelable: boolean;
        authorizedAt?: string;
        paidAt?: string;
        canceledAt?: string;
        expiresAt: string;
        expiredAt?: string;
        failedAt?: string;
        amount: Amount;
        amountRefunded?: Amount;
        amountRemaining?: Amount;
        amountCaptured?: Amount;
        description: string;
        redirectUrl: string|null;
        webhookUrl?: string;
        method: Method;
        metadata: any;
        locale: Locale;
        countryCode?: string;
        profileId: string;
        settlementAmount?: Amount;
        settlementId?: string;
        customerId?: string;
        sequenceType: string;
        mandateId?: string;
        subscriptionId?: string;
        orderId?: string;
        details?: any;
        applicationFee?: Amount;
        _links: Links;
    }

    interface RefundResponse {
        resource: string;
        id: string;
        amount: Amount;
        status: string;
        createdAt: string;
        description: string;
        paymentId: string;
        _links: Links;
    }
      
    interface SubscriptionResponse {
        resource: string;
        id: string;
        mode: ApiMode;
        status: SubscriptionStatus;
        amount: Amount;
        times: number;
        timesRemaining: number;
        interval: string;
        startDate: string;
        nextPaymentDate?: string;
        description: string;
        method: string;
        mandateId?: string;
        canceledAt: string;
        webhookUrl: string;
        metadata: any;
        _links: Links;
    
        // Access token parameters
        testmode?: boolean;
    }

    interface Shipment {
        lines: Array<OrderLine>,
        tracking?: Tracking,
    
        // Access token parameters
        testmode?: boolean,
      }
    
      interface Tracking {
        carrier: string,
        code: string,
        url?: string,
      }

      interface Subscription {
        amount: Amount,
        times?: number,
        interval: string,
        startDate?: string,
        description: string,
        method: 'creditcard'|'directdebit'|null,
        mandateId?: string,
        webhookUrl?: string,
        metadata?: string,
    
        // Access token parameters
        profileId?: string,
        testmode?: boolean,
      }
    
      type SubscriptionStatus =
        |'pending'
        |'active'
        |'canceled'
        |'suspended'
        |'complete

        type Locale =
    |'en_US'
    |'nl_NL'
    |'nl_BE'
    |'fr_FR'
    |'fr_BE'
    |'de_DE'
    |'de_AT'
    |'de_CH'
    |'es_ES'
    |'ca_ES'
    |'pt_PT'
    |'it_IT'
    |'nb_NO'
    |'sv_SE'
    |'fi_FI'
    |'da_DK'
    |'is_IS'
    |'hu_HU'
    |'pl_PL'
    |'lv_LV'
    |'lt_LT'

  type Method =
    |'bancontact'
    |'banktransfer'
    |'belfius'
    |'bitcoin'
    |'creditcard'
    |'directdebit'
    |'eps'
    |'giftcard'
    |'giropay'
    |'ideal'
    |'inghomepay'
    |'kbc'
    |'paypal'
    |'paysafecard'
    |'sofort'

  type ApiMode = 'test'|'live'

  interface Image {
    size1x: string,
    size2x: string,
    svg: string,
  }

  interface Url {
    href: string,
    type: string,
  }

  interface Links {
    self: Url,
    documentation: Url,

    [link: string]: any,
  }

  interface Amount {
    currency: string,
    value: string,
  }

  interface Address {
    streetAndNumber?: string,
    postalCode?: string,
    city?: string,
    region?: string,
    country?: string,
  }

  type CardLabel =
    |'American'
    |'Express'
    |'Carta'
    |'Si'
    |'Carte'
    |'Bleue'
    |'Dankort'
    |'Diners'
    |'Club'
    |'Discover'
    |'JCB'
    |'Laser'
    |'Maestro'
    |'Mastercard'
    |'Unionpay'
    |'Visa'
    |null
}