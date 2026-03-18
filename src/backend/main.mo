import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    location : Text;
    message : Text;
    timestamp : Int;
  };

  module Enquiry {
    public func compareByTimestamp(a : Enquiry, b : Enquiry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  var nextId = 0;
  let enquiries = Map.empty<Nat, Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, location : Text, message : Text, timestamp : Int) : async Nat {
    if (name == "" or phone == "" or location == "" or message == "") {
      Runtime.trap("All fields must be filled.");
    };

    let enquiry : Enquiry = {
      id = nextId;
      name;
      phone;
      location;
      message;
      timestamp;
    };

    enquiries.add(nextId, enquiry);
    nextId += 1;
    nextId - 1;
  };

  public query ({ caller }) func getEnquiry(id : Nat) : async ?Enquiry {
    enquiries.get(id);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray().sort(Enquiry.compareByTimestamp);
  };
};
