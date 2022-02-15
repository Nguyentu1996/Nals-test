import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Injectable({ providedIn: 'root' })
export class SpinnerOverlayService {
  private overlayRef!: OverlayRef;
  constructor(private overlay: Overlay) {}
  public show() {
    // Returns an OverlayRef (which is a PortalHost)
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        height: '57px',
        width: '57px',
        panelClass: 'spinerBackdropClass'
      });
    }
    if (this.overlayRef.hasAttached()) {
      return;
    }
    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(SpinnerComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
  }
  public hide() {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
