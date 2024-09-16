import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  customerName = '';
  customerAddress = '';
  customerPhone = '';
  paymentMethod = 'credit-card';

  onSubmit() {
    // เก็บข้อมูลการสั่งซื้อ
    const orderDetails = {
      name: this.customerName,
      address: this.customerAddress,
      phone: this.customerPhone,
      paymentMethod: this.paymentMethod
    };

    console.log('สั่งซื้อเรียบร้อย:', orderDetails);
    // สามารถเรียกใช้ API เพื่อส่งข้อมูลการสั่งซื้อไปยังเซิร์ฟเวอร์ได้ที่นี่
  }
}

